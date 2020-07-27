export enum DateFormat {
  DATE_TIME,
  DATE
}


// Todo maybe
export class DateFormatter{
  static formatDate(date: Date, format: DateFormat): string {
    switch (format) {
      case DateFormat.DATE_TIME:
        break;
      case DateFormat.DATE:
        break;
    }
    return undefined;
  }
}
