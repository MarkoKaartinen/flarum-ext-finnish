// Custom Finnish Moment.js Locales
// Based on: https://github.com/moment/moment/blob/develop/locale/fi.js

moment.locale('fi', {
  months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
  monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
  weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
  weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
  weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'Do MMMM[ta] YYYY',
    LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
    LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm'
  },
  calendar: {
    sameDay: '[tänään] [klo] LT',
    nextDay: '[huomenna] [klo] LT',
	nextWeek : 'dddd [klo] LT',
    lastDay : '[eilen] [klo] LT',
    lastWeek : '[viime] dddd[na] [klo] LT',
    sameElse : 'L'
  },
  relativeTime: {
	future : '%s päästä',
	past : '%s sitten',
    s: 'hetki sitten',
    m: 'minuutti',
    mm: '%d minuuttia',
    h: 'tunti',
    hh: '%d tuntia',
    d: 'päivä',
    dd: '%d päivää',
    M: 'kuukausi',
    MM: '%d kuukautta',
    y: 'vuosi',
    yy: '%d vuotta'
  },
  ordinalParse: /\d{1,2}\./,
  ordinal : '%d.',
  week: {
    dow: 1, // Monday is the first day of the week. Canadian French uses 0, because Sunday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});