export module Mailingful {
    export interface Response<T> {
        Error: string
        Payload: T
        Meta: any
    }

    export interface Envelope {
        Id: string
        MessageId: string
        InReplyTo: string
        Subject: string
        From: string
        Date: string
        To: string
        CC: string
        BCC: string
        Seen: boolean
        Size: number
        S3Key: string
    }

    export interface EnvelopeWithLabels {
        Envelope: Envelope
        Labels: Array<string>
    }

    export interface MailContent {
        HtmlBody: string
        TextBody: string
        Attachments: Array<Attachment>
    }

    export interface Attachment {
        Name: string
        MimeType: string
        S3Key: string
        Size: number
    }

    export interface GetMails {
        Label: string
        SearchTerm: string
        Offset?: number
    }

    export interface InsertNewAttachment {
        Attachment: Attachment
        MailId: string
        Data: string
    }

    export interface DeleteAttachment {
        S3Key: string
        MailId: string
    }

    export interface GetContent {
        MailId: string
    }

    export interface MarkSeen {
        MailId: string
        Seen: boolean
    }

    export interface MoveToFolder {
        MailIds: Array<string>
        FolderName: string
    }

    export interface InsertDraft {
        Mail: Envelope
        Attachments: Array<Attachment>
        HTMLBody: string
        TextBody: string
    }

    export interface InsertPromotion {
        Email: string
    }

    export interface ExternalAccount {
        Id: string
        AccountId: string
        Host: string
        Username: string
        Password: string
        Protocol: string
        Port: number
    }
}