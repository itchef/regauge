describe('<COMPONENT_NAME />', () => {
  let component
  describe('HTML Render', () => {
    beforeEach(() => {
      component = shallow(<COMPONENT_NAME />);
    });
    it('should render COMPONENT_NAME successfully', () => {
      expect(component.find('div').first().text()).toEqual('COMPONENT_NAME rendered successfully');
    });
  });
});
