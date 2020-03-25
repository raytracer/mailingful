import { Result, Ok, Err, Option, None, Some } from 'space-lift';
import { Mailingful as m } from './types';

export enum Status {
    OK = 0,
    NETWORK_ERROR = 1,
    BAD_REQUEST = 2
}

export class API {
    public static readonly ORIGIN = "https://api.mailingful.com/v1";
    private static TOKEN: Option<string> = None;

    static setCookie(name: string, value: string, seconds: number) {
        let expires = "";
        if (seconds) {
            let date = new Date();
            date.setTime(date.getTime() + (seconds * 3600 * 24));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    static getCookie(name: string): Option<string> {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return Some(c.substring(nameEQ.length, c.length));
        }
        return None;
    }

    static eraseCookie(name: string) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }


    public static getHeaders() {
        if (!this.TOKEN.isDefined()) {
            this.TOKEN = API.getCookie("token");
            if (!this.TOKEN.isDefined()) {
                window.location.href = "/login";
            }
        }

        return new Headers({
            'Authorization': `Bearer ${this.TOKEN.get()}`,
            'Content-Type': 'application/json'
        });
    }

    public static hasToken = () => API.TOKEN.isDefined()

    public static async refreshToken() {
        try {
            let response = await fetch(`${this.ORIGIN}/refresh_token`, { headers: this.getHeaders(), method: "GET" })
            let json = (await response.json());
            if (response.ok && json.token) {
                this.TOKEN = Some(json.token);
                this.setCookie("token", json.token, 3600);
            } else {
                window.location.href = "/login";
            }
        } catch (e) {
            console.log(e);
        }
    }

    public static async getMails(query: m.GetMails): Promise<Result<Status, m.Response<Array<m.EnvelopeWithLabels>>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/mails/get`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(query) })
            let json = (await response.json() as m.Response<Array<m.EnvelopeWithLabels>>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async getMailContent(query: m.GetContent): Promise<Result<Status, m.Response<m.MailContent>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/mails/content`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(query) })
            let json = (await response.json() as m.Response<m.MailContent>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            console.log(e);
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async getEnvelope(query: m.GetContent): Promise<Result<Status, m.Response<m.Envelope>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/mails/envelope`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(query) })
            let json = (await response.json() as m.Response<m.Envelope>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            console.log(e);
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async getExternalAccounts(): Promise<Result<Status, m.Response<Array<m.ExternalAccount>>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/accounts/get`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify({}) });
            let json = (await response.json() as m.Response<Array<m.ExternalAccount>>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            console.log(e);
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async markSeen(seen: m.MarkSeen): Promise<Result<Status, m.Response<null>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/mails/markseen`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(seen) })
            let json = (await response.json() as m.Response<null>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async insertAttachment(newAttachment: m.InsertNewAttachment): Promise<Result<Status, m.Response<string>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/attachments/create`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(newAttachment) })
            let json = (await response.json() as m.Response<string>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async deleteAttachment(deleteAttachment: m.DeleteAttachment): Promise<Result<Status, m.Response<boolean>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/attachments/delete`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(deleteAttachment) })
            let json = (await response.json() as m.Response<boolean>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async saveDraft(draft: m.InsertDraft): Promise<Result<Status, m.Response<string>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/drafts/create`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(draft) })
            let json = (await response.json() as m.Response<string>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async sendDraft(byId: m.GetContent): Promise<Result<Status, m.Response<boolean>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/drafts/send`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(byId) })
            let json = (await response.json() as m.Response<boolean>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async scheduleDraft(byId: m.GetContent): Promise<Result<Status, m.Response<boolean>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/drafts/schedule`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(byId) })
            let json = (await response.json() as m.Response<boolean>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async moveToFolder(moveTo: m.MoveToFolder): Promise<Result<Status, m.Response<null>>> {
        try {
            let response = await fetch(`${this.ORIGIN}/mails/movetofolder`, { headers: this.getHeaders(), method: "POST", body: JSON.stringify(moveTo) })
            let json = (await response.json() as m.Response<null>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async insertPromotion(promotion: m.InsertPromotion) {
        try {
            let response = await fetch(`${this.ORIGIN}/promotions/insert`, { method: "POST", body: JSON.stringify(promotion) })
            let json = (await response.json() as m.Response<boolean>);

            if (response.ok) {
                return Ok(json);
            } else {
                return Err(Status.BAD_REQUEST);
            }
        } catch (e) {
            return Err(Status.NETWORK_ERROR);
        }
    }

    public static async login(email: string, password: string): Promise<Status> {
        let input = {
            username: email,
            password: password
        };

        try {
            let response = await fetch(`${this.ORIGIN}/login`, { headers: new Headers({ 'Content-Type': 'application/json' }), method: "POST", body: JSON.stringify(input) })
            let json = (await response.json());

            if (response.ok && json.token) {
                this.TOKEN = Some(json.token);
                this.setCookie("token", json.token, 3600);
                return Status.OK;
            } else {
                return Status.BAD_REQUEST;
            }
        } catch (e) {
            return Status.NETWORK_ERROR;
        }
    }
}