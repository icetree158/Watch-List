const date = new Date()
const numMonth = date.getMonth()
let nameMonth = ""
const year = date.getFullYear()
switch (numMonth) {
    case 0:
        nameMonth = "JANUARY"
        break;
    case 1:
        nameMonth = "February"
        break;
    case 2:
        nameMonth = "MARCH"
        break;
    case 3:
        nameMonth = "APRIL"
        break;
    case 4:
        nameMonth = "MAY"
        break;
    case 5:
        nameMonth = "JUNE"
        break;
    case 6:
        nameMonth = "JULY"
        break;
    case 7:
        nameMonth = "AUGUST"
        break;
    case 8:
        nameMonth = "SEPTEMBER"
        break;
    case 9:
        nameMonth = "OCTOBER"
        break;
    case 10:
        nameMonth = "NOVEMBER"
        break;
    case 11:
        nameMonth = "DECEMBER"
        break;
        default:
            nameMonth = "";

}
export  {nameMonth,year};