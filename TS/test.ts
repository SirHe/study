// let x1: number = 1
// let x2: string = '123'
// let x3: boolean = false
// let x4: null = null
// let x5: undefined = undefined

// // never和void只能用在函数返回值那个地方

// x4 = undefined
// x5 = null

// x1 = null

// // 元组：固定长度和固定类型
// let tuple: [string, string, number] = ['123', '456', 789]
// // any类型就相当于将ts打回js
// let y1: any = '123'
// y1 = 456
// y1 = false
// // unknown
// let y2: unknown = '123'
// y2 = 123
// y2 = true

// let test1: string = 'abc'
// test1 = y1
// // 将一个unknown的值赋给其他变量的解决方案
// // 1、缩小范围
// if (typeof y2 === 'string') {
//   test1 = y2
// }
// // 2、使用断言
// test1 = y2 as string
// test1 = <string>y2


// // 函数声明的几种方式 ！！！
// // 在js中，函数的声明有三种方式
// // 1、使用function关键字声明的普通函数
// // function fn() { }
// // 2、使用function关键字声明一个匿名函数
// // function () { }
// // 但是直接这样写会报错，因为没有任何意义，需要用一个变量来保存：
// // let fn = function () { }
// // 或者变成立即执行函数
// // (function () { })()
// // 3、箭头函数
// // ()=> { }
// // 同样的，这样一个箭头函数也相当于一个匿名函数（function声明的函数和箭头函数还是有区别的 -> this、arguments、yield、prototype）也会报错，
// // 所以如果只是声明而得不到执行的话，是没有意义的。那么同样的需要用一个变量保存起来或者立即执行。




// // 1、普通形式
// function fn1(a: number, b: number): number {
//   return a + b
// }
// let fn2: (a: number, b: number) => number = function (a, b) { return a + b }
// let fn3: (a: number, b: number) => number = (a, b) => a + b

// // 2、箭头函数
// let fn4 = (a: number, b: number): number => a + b
// // 3、使用type
// type myFn = (a: number, b: number) => number
// let fn5: myFn
// let fn = (a: number, b: number): number => a + b
// fn = (a, b) => a * b
