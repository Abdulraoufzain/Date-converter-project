import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import moment from 'moment-hijri';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MiladiDate = { year: 2003, month: 10, day: 25 }; // تاريخ ميلادي افتراضي
  hijriDate?: string ;
  hijriDay?: string;

  converterDate() {
    const { year, month, day } = this.MiladiDate;
    const MiladiDateString = `${year}-${this.AddZero(month)}-${this.AddZero(day)}`;

    //  تحويل التاريخ إلى هجري
    const momentHijri = moment(MiladiDateString, 'YYYY-MM-DD');
    this.hijriDate = momentHijri.format('iYYYY/iMM/iDD');
    
    // الحصول على اليوم الهجري
    this.hijriDay = this.getDayName(momentHijri.isoWeekday());
  }

  AddZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  getDayName(dayNumber: number): string {
    const days = [ '', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت' ,'الأحد'];
    return days[dayNumber];
  }
}