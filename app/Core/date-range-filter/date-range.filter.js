function dateRange($filter){
  return input => {
    let month = $filter("date")(input, 'MMM')
    let monday = input.getDate()
    console.log('monday:', monday)
    let sunday = input
    console.log(input.getDate() + 6)
    console.log(month)
    let output = $filter("date")(input, 'd') + ' ' + month
    return output
  }
}

export default dateRange
