
/**
 * Simple function to flatten the object which has array in it propperty
 * tobecome array of multiple object with all value inside the array property
 * @param input any object
 * @returns 
 */
export function flattenObject(input: any, emptyValue = ''): any[] {

  const findArray = Object.entries(input).find(([key, value]) => Array.isArray(value));

  if (findArray) {
    const [key, arrValues] = findArray;
    if ((arrValues as any).length === 0) {
      return [{ ...input, [key]: emptyValue }]
    }
    return (arrValues as any).flatMap((v: any) => flattenObject({ ...input, [key]: v }));
  }
  return [input]
}

export function flattenObjects(inputs: any[]): any[] {
  return (inputs as any).flatMap((v: any) => flattenObject({ ...v }));
}


export default flattenObject;
