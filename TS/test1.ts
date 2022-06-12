// ts的命名空间相当于js的模块化，如果想要外界使用，需要导出和导入
namespace A {
  function add(a: number, b: number): number {
    return a + b
  }
  add(1, 2)

  // 如果外界想要使用，需要导出
  export const s: string = 'hello A'
}

namespace B {
  function add(a: string, b: string): string {
    return a + b
  }
  add('a', 'b')

  // 命名空间里面也可以使用命名空间
  export namespace X {
    export const s: string = 'hello X'
  }

  console.log(X.s)
}

console.log(A.s)
console.log(B.X.s)
