import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import moment from 'moment-hijri';
@Component({
  selector: 'app-date-converter',
  standalone: true,
  imports : [FormsModule],
  templateUrl: './date-converter.component.html',
  styleUrls: ['./date-converter.component.css']
})
export class DateConverterComponent {
  gregorianDate = { year: 2024, month: 8, day: 24 }; // تاريخ ميلادي افتراضي
  hijriDate: string | undefined;
  hijriDay: string | undefined;

  convertDate() {
    const { year, month, day } = this.gregorianDate;
    const gregorianDateString = `${year}-${this.padZero(month)}-${this.padZero(day)}`;

    // تحويل التاريخ إلى هجري
    const momentHijri = moment(gregorianDateString, 'YYYY-MM-DD');
    this.hijriDate = momentHijri.format('iYYYY/iMM/iDD');
    
    // الحصول على اليوم الهجري
    this.hijriDay = this.getDayName(momentHijri.isoWeekday());
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  getDayName(dayNumber: number): string {
    const days = [ '', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت' ,'الأحد'];
    return days[dayNumber];
  }
}