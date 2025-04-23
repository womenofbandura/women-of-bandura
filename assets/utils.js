function trimDate(item) {
    if (item["show-date"]) {
      console.log("item.show-date: ", item["show-date"])
      var dateArr = item["show-date"].split("; ")
      let yearsArr = [];
      console.log({dateArr})
      dateArr.forEach((dateStr) => {
        var subArr = dateStr.split("/")
        yearsArr.push(subArr[2])
      })
      
      var uniq = [...new Set(yearsArr)]
      return uniq.join(", ");
    }
    return false;
}