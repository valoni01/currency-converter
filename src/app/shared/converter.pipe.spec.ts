import { ConverterPipe } from './converter.pipe';

describe('ConverterPipe', () => {

   let convertpipe = new ConverterPipe

  it('create an instance', () => {
    const pipe = new ConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a * b',()=>{
    let res = 6;
    expect(convertpipe.transform(2,3)).toBe(res.toFixed(2))
  })

});
