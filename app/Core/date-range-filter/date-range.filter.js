function dateRange($filter){
  return input => {
    input  = new Date(input)
    let month = $filter("date")(input, 'MMM')
    let year = input.getFullYear()
    let day = input.getDate()
    let sunday = new Date(year, input.getMonth(), day + 6)
    let sundayMonth = $filter("date")(sunday, 'MMM')
    let sday = sunday.getDate()
    let output = ''
    if(month === sundayMonth){
      output = day + ' - ' + sday + ' ' + month + ' ' + year
    } else {
      if (year === sunday.getFullYear()) {
        output = day + ' ' + month + ' - ' + sday + ' ' + sundayMonth + ' ' + year
      } else {
        output = day + ' ' + month + ' ' + year + ' - ' + sday + ' ' + sundayMonth + ' ' + sunday.getFullYear()
      }
    }
    return output
  }
}

export default dateRange
