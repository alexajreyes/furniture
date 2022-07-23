export default function useProductByCategories(Products, Path) {
  //   debugger

  let Newproduct

  if (Path === 'All' || Path === 'Sofa' || Path === 'Light') {
    Newproduct = Products.sort(function (a, b) {
      if (a.id > b.id) {
        return -1
      }
      if (a.id < b.id) {
        return 1
      }
      // a must be equal to b
      return 0
    })
  } else {
    Newproduct = Products.sort(function (a, b) {
      if (a.id > b.id) {
        return 1
      }
      if (a.id < b.id) {
        return -1
      }
      // a must be equal to b
      return 0
    })
  }

  return { Newproduct }
}
