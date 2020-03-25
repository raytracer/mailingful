import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween);

export class Utils {
    public static isToday(date: Date) {
        let todayStart = dayjs().startOf("day");
        let todayEnd = dayjs().endOf("day");
        return (dayjs(date) as any).isBetween(todayStart, todayEnd);
    }

    public static isYesterday(date: Date) {
        let yesterday = dayjs().subtract(1, "day");
        let yesterdayStart = yesterday.startOf("day");
        let yesterdayEnd = yesterday.endOf("day");
        return (dayjs(date) as any).isBetween(yesterdayStart, yesterdayEnd);
    }

    public static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}