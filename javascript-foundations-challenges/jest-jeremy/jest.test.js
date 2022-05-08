describe("hello", () => {
  it("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
  })
})

const hello = () => {
  return "hi"
}

describe("areYouHungry", () => {
  it("returns eat food or keep working based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep working")
  })
})

const areYouHungry = (string) => {
  if(string === "yes"){
    return "eat food"
  } else if(string === "no") {
    return "keep working"
  }
}

describe("addGranola", () => {
  let groceryList = ["apples", "carrots", "oatmeal"]
  let result = ["apples", "carrots", "oatmeal", "granola"]
  it("adds granola to the end of an array", () => {
    expect(addGranola(groceryList)).toEqual(result)
  })
})

var addGranola = (array) => {
  return array.concat("granola");
}