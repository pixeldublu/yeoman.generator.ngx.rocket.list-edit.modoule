import { <%= mainTitle %>Module } from './<%= secondaryTitle %>.module';

describe('<%= mainTitle %>Module', () => {
  let <%= secondaryTitle %>Module: <%= mainTitle %>Module;

  beforeEach(() => {
    <%= secondaryTitle %>Module = new <%= mainTitle %>Module();
  });

  it('should create an instance', () => {
    expect(<%= secondaryTitle %>Module).toBeTruthy();
  });
});
