function lengthSorter(a, b) {
    var result = b.length - a.length;
    if (result == 0)
      result = a.localeCompare(b);
    return result;
  }
   
  var test = ["Here", "are", "some", "sample", "strings", "to", "be", "sorted","thisisareallylongword"];
  console.log(test.sort(lengthSorter));
    