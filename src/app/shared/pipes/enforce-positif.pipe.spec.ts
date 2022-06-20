import { EnforcePositifPipe } from './enforce-positif.pipe';

describe('EnforcePositifPipe', () => {
  it('create an instance', () => {
    const pipe = new EnforcePositifPipe();
    expect(pipe).toBeTruthy();
  });
});
