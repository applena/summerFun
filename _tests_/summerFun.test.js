
const app = require('../App');

describe('summer fun', () => {
  it('is', () => {
    expect('yes').toEqual('yes');
  });

  it('the activity state changes when the "bord" button is pushed', () => {
    let component = mount(
      <App />
    );

    let button = component.find('TouchableHighlight');
    button.simulate("click");

    expect(component.state("activity")).toNotBe('');
    
  });

  it('loads correctly', () => {
    let component = mount(
      <App />
    );
  });

  it('', () => {

  });
});