const datesConstant = {
  startingDOBDate: '1/1/1990',
  dateFormat: 'D/M/YYYY',
  dateFormatDB: 'YYYY-MM-D',
  timeFormat: 'kk:mm',
  monthYear: 'MM-YYYY',
};

const maritalStatusConstant = [
  { value: 'single', text: 'Soltero' },
  { value: 'married', text: 'Casado' },
  { value: 'divorced', text: 'Divorciado' },
  { value: 'other', text: 'Otro' },
];

const countryListConstant = [
  { value: 'PY', text: 'Paraguay' },
  { value: 'AF', text: 'Afganistán' },
  { value: 'AL', text: 'Albania' },
  { value: 'DE', text: 'Alemania' },
  { value: 'AD', text: 'Andorra' },
  { value: 'AO', text: 'Angola' },
  { value: 'AI', text: 'Anguila' },
  { value: 'AQ', text: 'Antártida' },
  { value: 'AG', text: 'Antigua y Barbuda' },
  { value: 'SA', text: 'Arabia Saudí' },
  { value: 'DZ', text: 'Argelia' },
  { value: 'AR', text: 'Argentina' },
  { value: 'AM', text: 'Armenia' },
  { value: 'AW', text: 'Aruba' },
  { value: 'AU', text: 'Australia' },
  { value: 'AT', text: 'Austria' },
  { value: 'AZ', text: 'Azerbaiyán' },
  { value: 'BS', text: 'Bahamas' },
  { value: 'BD', text: 'Bangladés' },
  { value: 'BB', text: 'Barbados' },
  { value: 'BH', text: 'Baréin' },
  { value: 'BE', text: 'Bélgica' },
  { value: 'BZ', text: 'Belice' },
  { value: 'BJ', text: 'Benín' },
  { value: 'BM', text: 'Bermudas' },
  { value: 'BY', text: 'Bielorrusia' },
  { value: 'BO', text: 'Bolivia' },
  { value: 'BA', text: 'Bosnia y Herzegovina' },
  { value: 'BW', text: 'Botsuana' },
  { value: 'BR', text: 'Brasil' },
  { value: 'BN', text: 'Brunéi' },
  { value: 'BG', text: 'Bulgaria' },
  { value: 'BF', text: 'Burkina Faso' },
  { value: 'BI', text: 'Burundi' },
  { value: 'BT', text: 'Bután' },
  { value: 'CV', text: 'Cabo Verde' },
  { value: 'KH', text: 'Camboya' },
  { value: 'CM', text: 'Camerún' },
  { value: 'CA', text: 'Canadá' },
  { value: 'IC', text: 'Canarias' },
  { value: 'BQ', text: 'Caribe neerlandés' },
  { value: 'QA', text: 'Catar' },
  { value: 'EA', text: 'Ceuta y Melilla' },
  { value: 'TD', text: 'Chad' },
  { value: 'CZ', text: 'Chequia' },
  { value: 'CL', text: 'Chile' },
  { value: 'CN', text: 'China' },
  { value: 'CY', text: 'Chipre' },
  { value: 'VA', text: 'Ciudad del Vaticano' },
  { value: 'CO', text: 'Colombia' },
  { value: 'KM', text: 'Comoras' },
  { value: 'KP', text: 'Corea del Norte' },
  { value: 'KR', text: 'Corea del Sur' },
  { value: 'CR', text: 'Costa Rica' },
  { value: 'CI', text: 'Côte d’Ivoire' },
  { value: 'HR', text: 'Croacia' },
  { value: 'CU', text: 'Cuba' },
  { value: 'CW', text: 'Curazao' },
  { value: 'DG', text: 'Diego García' },
  { value: 'DK', text: 'Dinamarca' },
  { value: 'DM', text: 'Dominica' },
  { value: 'EC', text: 'Ecuador' },
  { value: 'EG', text: 'Egipto' },
  { value: 'SV', text: 'El Salvador' },
  { value: 'AE', text: 'Emiratos Árabes Unidos' },
  { value: 'ER', text: 'Eritrea' },
  { value: 'SK', text: 'Eslovaquia' },
  { value: 'SI', text: 'Eslovenia' },
  { value: 'ES', text: 'España' },
  { value: 'US', text: 'Estados Unidos' },
  { value: 'EE', text: 'Estonia' },
  { value: 'ET', text: 'Etiopía' },
  { value: 'EZ', text: 'Eurozone' },
  { value: 'PH', text: 'Filipinas' },
  { value: 'FI', text: 'Finlandia' },
  { value: 'FJ', text: 'Fiyi' },
  { value: 'FR', text: 'Francia' },
  { value: 'GA', text: 'Gabón' },
  { value: 'GM', text: 'Gambia' },
  { value: 'GE', text: 'Georgia' },
  { value: 'GH', text: 'Ghana' },
  { value: 'GI', text: 'Gibraltar' },
  { value: 'GD', text: 'Granada' },
  { value: 'GR', text: 'Grecia' },
  { value: 'GL', text: 'Groenlandia' },
  { value: 'GP', text: 'Guadalupe' },
  { value: 'GU', text: 'Guam' },
  { value: 'GT', text: 'Guatemala' },
  { value: 'GF', text: 'Guayana Francesa' },
  { value: 'GG', text: 'Guernesey' },
  { value: 'GN', text: 'Guinea' },
  { value: 'GQ', text: 'Guinea Ecuatorial' },
  { value: 'GW', text: 'Guinea-Bisáu' },
  { value: 'GY', text: 'Guyana' },
  { value: 'HT', text: 'Haití' },
  { value: 'HN', text: 'Honduras' },
  { value: 'HU', text: 'Hungría' },
  { value: 'IN', text: 'India' },
  { value: 'ID', text: 'Indonesia' },
  { value: 'IQ', text: 'Irak' },
  { value: 'IR', text: 'Irán' },
  { value: 'IE', text: 'Irlanda' },
  { value: 'AC', text: 'Isla de la Ascensión' },
  { value: 'IM', text: 'Isla de Man' },
  { value: 'CX', text: 'Isla de Navidad' },
  { value: 'NF', text: 'Isla Norfolk' },
  { value: 'IS', text: 'Islandia' },
  { value: 'AX', text: 'Islas Åland' },
  { value: 'KY', text: 'Islas Caimán' },
  { value: 'CC', text: 'Islas Cocos' },
  { value: 'CK', text: 'Islas Cook' },
  { value: 'FO', text: 'Islas Feroe' },
  { value: 'GS', text: 'Islas Georgia del Sur y Sandwich del Sur' },
  { value: 'FK', text: 'Islas Malvinas' },
  { value: 'MP', text: 'Islas Marianas del Norte' },
  { value: 'MH', text: 'Islas Marshall' },
  { value: 'UM', text: 'Islas menores alejadas de EE. UU.' },
  { value: 'PN', text: 'Islas Pitcairn' },
  { value: 'SB', text: 'Islas Salomón' },
  { value: 'TC', text: 'Islas Turcas y Caicos' },
  { value: 'VG', text: 'Islas Vírgenes Británicas' },
  { value: 'VI', text: 'Islas Vírgenes de EE. UU.' },
  { value: 'IL', text: 'Israel' },
  { value: 'IT', text: 'Italia' },
  { value: 'JM', text: 'Jamaica' },
  { value: 'JP', text: 'Japón' },
  { value: 'JE', text: 'Jersey' },
  { value: 'JO', text: 'Jordania' },
  { value: 'KZ', text: 'Kazajistán' },
  { value: 'KE', text: 'Kenia' },
  { value: 'KG', text: 'Kirguistán' },
  { value: 'KI', text: 'Kiribati' },
  { value: 'XK', text: 'Kosovo' },
  { value: 'KW', text: 'Kuwait' },
  { value: 'LA', text: 'Laos' },
  { value: 'LS', text: 'Lesoto' },
  { value: 'LV', text: 'Letonia' },
  { value: 'LB', text: 'Líbano' },
  { value: 'LR', text: 'Liberia' },
  { value: 'LY', text: 'Libia' },
  { value: 'LI', text: 'Liechtenstein' },
  { value: 'LT', text: 'Lituania' },
  { value: 'LU', text: 'Luxemburgo' },
  { value: 'MK', text: 'Macedonia' },
  { value: 'MG', text: 'Madagascar' },
  { value: 'MY', text: 'Malasia' },
  { value: 'MW', text: 'Malaui' },
  { value: 'MV', text: 'Maldivas' },
  { value: 'ML', text: 'Mali' },
  { value: 'MT', text: 'Malta' },
  { value: 'MA', text: 'Marruecos' },
  { value: 'MQ', text: 'Martinica' },
  { value: 'MU', text: 'Mauricio' },
  { value: 'MR', text: 'Mauritania' },
  { value: 'YT', text: 'Mayotte' },
  { value: 'MX', text: 'México' },
  { value: 'FM', text: 'Micronesia' },
  { value: 'MD', text: 'Moldavia' },
  { value: 'MC', text: 'Mónaco' },
  { value: 'MN', text: 'Mongolia' },
  { value: 'ME', text: 'Montenegro' },
  { value: 'MS', text: 'Montserrat' },
  { value: 'MZ', text: 'Mozambique' },
  { value: 'MM', text: 'Myanmar (Birmania)' },
  { value: 'NA', text: 'Namibia' },
  { value: 'NR', text: 'Nauru' },
  { value: 'NP', text: 'Nepal' },
  { value: 'NI', text: 'Nicaragua' },
  { value: 'NE', text: 'Níger' },
  { value: 'NG', text: 'Nigeria' },
  { value: 'NU', text: 'Niue' },
  { value: 'NO', text: 'Noruega' },
  { value: 'NC', text: 'Nueva Caledonia' },
  { value: 'NZ', text: 'Nueva Zelanda' },
  { value: 'OM', text: 'Omán' },
  { value: 'NL', text: 'Países Bajos' },
  { value: 'PK', text: 'Pakistán' },
  { value: 'PW', text: 'Palaos' },
  { value: 'PA', text: 'Panamá' },
  { value: 'PG', text: 'Papúa Nueva Guinea' },
  { value: 'PE', text: 'Perú' },
  { value: 'PF', text: 'Polinesia Francesa' },
  { value: 'PL', text: 'Polonia' },
  { value: 'PT', text: 'Portugal' },
  { value: 'PR', text: 'Puerto Rico' },
  { value: 'HK', text: 'RAE de Hong Kong (China)' },
  { value: 'MO', text: 'RAE de Macao (China)' },
  { value: 'GB', text: 'Reino Unido' },
  { value: 'CF', text: 'República Centroafricana' },
  { value: 'CG', text: 'República del Congo' },
  { value: 'CD', text: 'República Democrática del Congo' },
  { value: 'DO', text: 'República Dominicana' },
  { value: 'RE', text: 'Reunión' },
  { value: 'RW', text: 'Ruanda' },
  { value: 'RO', text: 'Rumanía' },
  { value: 'RU', text: 'Rusia' },
  { value: 'EH', text: 'Sáhara Occidental' },
  { value: 'WS', text: 'Samoa' },
  { value: 'AS', text: 'Samoa Americana' },
  { value: 'BL', text: 'San Bartolomé' },
  { value: 'KN', text: 'San Cristóbal y Nieves' },
  { value: 'SM', text: 'San Marino' },
  { value: 'MF', text: 'San Martín' },
  { value: 'PM', text: 'San Pedro y Miquelón' },
  { value: 'VC', text: 'San Vicente y las Granadinas' },
  { value: 'SH', text: 'Santa Elena' },
  { value: 'LC', text: 'Santa Lucía' },
  { value: 'ST', text: 'Santo Tomé y Príncipe' },
  { value: 'SN', text: 'Senegal' },
  { value: 'RS', text: 'Serbia' },
  { value: 'SC', text: 'Seychelles' },
  { value: 'SL', text: 'Sierra Leona' },
  { value: 'SG', text: 'Singapur' },
  { value: 'SX', text: 'Sint Maarten' },
  { value: 'SY', text: 'Siria' },
  { value: 'SO', text: 'Somalia' },
  { value: 'LK', text: 'Sri Lanka' },
  { value: 'SZ', text: 'Suazilandia' },
  { value: 'ZA', text: 'Sudáfrica' },
  { value: 'SD', text: 'Sudán' },
  { value: 'SS', text: 'Sudán del Sur' },
  { value: 'SE', text: 'Suecia' },
  { value: 'CH', text: 'Suiza' },
  { value: 'SR', text: 'Surinam' },
  { value: 'SJ', text: 'Svalbard y Jan Mayen' },
  { value: 'TH', text: 'Tailandia' },
  { value: 'TW', text: 'Taiwán' },
  { value: 'TZ', text: 'Tanzania' },
  { value: 'TJ', text: 'Tayikistán' },
  { value: 'IO', text: 'Territorio Británico del Océano Índico' },
  { value: 'TF', text: 'Territorios Australes Franceses' },
  { value: 'PS', text: 'Territorios Palestinos' },
  { value: 'TL', text: 'Timor-Leste' },
  { value: 'TG', text: 'Togo' },
  { value: 'TK', text: 'Tokelau' },
  { value: 'TO', text: 'Tonga' },
  { value: 'TT', text: 'Trinidad y Tobago' },
  { value: 'TA', text: 'Tristán de Acuña' },
  { value: 'TN', text: 'Túnez' },
  { value: 'TM', text: 'Turkmenistán' },
  { value: 'TR', text: 'Turquía' },
  { value: 'TV', text: 'Tuvalu' },
  { value: 'UA', text: 'Ucrania' },
  { value: 'UG', text: 'Uganda' },
  { value: 'UN', text: 'United Nations' },
  { value: 'UY', text: 'Uruguay' },
  { value: 'UZ', text: 'Uzbekistán' },
  { value: 'VU', text: 'Vanuatu' },
  { value: 'VE', text: 'Venezuela' },
  { value: 'VN', text: 'Vietnam' },
  { value: 'WF', text: 'Wallis y Futuna' },
  { value: 'YE', text: 'Yemen' },
  { value: 'DJ', text: 'Yibuti' },
  { value: 'ZM', text: 'Zambia' },
  { value: 'ZW', text: 'Zimbabue' },
];

const genderListConstant = [
  { value: 'none', text: 'Ninguno' },
  { value: 'female', text: 'Femenino' },
  { value: 'male', text: 'Masculino' },
];

const bloodTypeConstant = [
  { value: 'a+', text: 'A (+)' },
  { value: 'a-', text: 'A (-)' },
  { value: 'b+', text: 'B (+)' },
  { value: 'b-', text: 'B (-)' },
  { value: 'o+', text: 'O (+)' },
  { value: 'o-', text: 'O (-)' },
  { value: 'ab+', text: 'AB (+)' },
  { value: 'ab-', text: 'AB (-)' },
];

const healthInsuranceConstant = [
  { value: 'asismed', text: 'Asismed' },
  { value: 'migone', text: 'Migone' },
  { value: 'comecipar', text: 'Comecipar' },
  { value: 'santa_clara', text: 'Santa Clara' },
];

const educationLevelConstant = [
  { value: 'elementary', text: 'Primaria' },
  { value: 'secondary', text: 'Secundaria' },
  { value: 'undergrad', text: 'Universitario' },
  { value: 'master', text: 'Maestria' },
  { value: 'phd', text: 'Doctorado' },
];

const languagesConstant = ['español'];

const paymentConstant = [
  { value: 'cash', text: 'Efectivo' },
  { value: 'deposit', text: 'Deposito' },
];

const bankConstant = [
  { value: 'itau', text: 'Itau' },
  { value: 'bbva', text: 'BBVA' },
  { value: 'vision', text: 'Vision Banco' },
  { value: 'familiar', text: 'Banco Familiar' },
  { value: 'gnb', text: 'GNB' },
];

const contractTypeConstant = [
  { value: '', text: ''},
  { value: 'permanent', text: 'Permanente' },
  { value: 'contractor', text: 'Contratado' },
  { value: 'casual', text: 'Casual' },
];

const jobTitleConstant = [
  { value: 'manager', text: 'Gerente' },
  { value: 'assistant_manager', text: 'Subgerente' },
  { value: 'supervisor', text: 'Supervisor' },
  { value: 'administrative', text: 'Empleado administrativo' },
  { value: 'intern', text: 'Pasante' },
];

const costCentreConstant = [
  { value: 'administrative', text: 'Administracion' },
  { value: 'sales', text: 'Ventas' },
  { value: 'marketing', text: 'Marketing' },
];

const shiftConstant = [
  { value: 'morning', text: 'Mañana' },
  { value: 'afternoon', text: 'Tarde' },
  { value: 'night', text: 'Noche' },
];

const employeesAttendanceListConstant = [
  {
    employeeId: 1234,
    firstName: 'Juan',
    lastName: 'Mignaco',
    totalMonthDays: 30,
    totalWorkedDays: 30,
    totalWorkedSSDays: 30,
    discountDays: false,
    reportDiscountDays: false,
    extraHours: {
      total: 7,
      nightlyHours: 1,
      dailyExtraHours: 2,
      nightlyExtraHours: 1,
      sundayHolidaysHours: 1,
      sundayHolidaysExtraHours: 2,
    },
    absence: {
      excusedAbsence: {
        days: 2,
        discount: false,
        socialSecurityDiscount: false,
      },
      unjustifiedAbsence: {
        days: 4,
        discount: false,
        socialSecurityDiscount: false,
      },
      suspension: {
        days: 1,
        discount: false,
        socialSecurityDiscount: false,
      },
      permission: {
        days: 0,
        discount: false,
        socialSecurityDiscount: false,
      },
    },
  },
  {
    employeeId: 720,
    firstName: 'Fiorella',
    lastName: 'Ardissone',
    totalMonthDays: 30,
    totalWorkedDays: 12,
    totalWorkedSSDays: 20,
    discountDays: false,
    reportDiscountDays: false,
    extraHours: {
      total: 5,
      nightlyHours: 1,
      dailyExtraHours: 1,
      nightlyExtraHours: 1,
      sundayHolidaysHours: 1,
      sundayHolidaysExtraHours: 1,
    },
    absence: {
      excusedAbsence: {
        days: 4,
        discount: false,
        socialSecurityDiscount: false,
      },
      unjustifiedAbsence: {
        days: 1,
        discount: false,
        socialSecurityDiscount: false,
      },
      suspension: {
        days: 0,
        discount: false,
        socialSecurityDiscount: false,
      },
      permission: {
        days: 0,
        discount: false,
        socialSecurityDiscount: false,
      },
    },
  },
];

const reactTableTextMsg = {
  previousText: 'Anterior',
  nextText: 'Siguiente',
  pageText: 'Pagina',
  ofText: 'de',
  rowsText: 'filas',
  noDataTextAssistance: 'No hay datos. Genere o importe datos de asistencia.',
  noDataTextSalary: 'No hay datos. Genere datos de salarios.',
  loadingText: 'Cargando datos...',
};

const minimumWage = {
  monthly: 2112562,
};

export {
  datesConstant,
  maritalStatusConstant,
  countryListConstant,
  genderListConstant,
  bloodTypeConstant,
  healthInsuranceConstant,
  educationLevelConstant,
  languagesConstant,
  paymentConstant,
  bankConstant,
  contractTypeConstant,
  jobTitleConstant,
  costCentreConstant,
  shiftConstant,
  employeesAttendanceListConstant,
  reactTableTextMsg,
  minimumWage,
};
