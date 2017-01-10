
export namespace Utils {

  ///////////////////////////////////////////////////////////
  // merge :: A : {} -> B : {} -> A & B
  ///////////////////////////////////////////////////////////

  export function merge<A, B>(a: A, b: B): A & B {

    let merged = <A & B>{};

    for(let i in a) {
      merged[i] = a[i];
    }

    for(let j in b) {
      merged[j] = b[j];
    }

    return merged;
  }
}
