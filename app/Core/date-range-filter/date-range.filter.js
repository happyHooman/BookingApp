function dateRange($filter){
  return input => {
    let month = $filter("date")(input, 'MMM')
    let year = input.getFullYear()
    let sunday = new Date(year, input.getMonth(), input.getDate() + 6)
    let sundayMonth = $filter("date")(sunday, 'MMM')
    let output = ''
    if(month === sundayMonth){
      output = input.getDate() + ' - ' + sunday.getDate() + ' ' + month + ' ' + year
    } else {
      if (year === sunday.getFullYear()) {
        output = input.getDate() + ' ' + month + ' - ' + sunday.getDate() + ' ' + sundayMonth + ' ' + year
      } else {
        output = input.getDate() + ' ' + month + ' ' + year + ' - ' + sunday.getDate() + ' ' + sundayMonth + ' ' + sunday.getFullYear()
      }
    }
    return output
  }
}

export default dateRange
