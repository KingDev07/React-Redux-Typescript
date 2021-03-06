import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MockDate from "mockdate";

Enzyme.configure({ adapter: new Adapter() });

MockDate.set("2018-01-01T00:00:00", 0);

Object.defineProperties(global, {
  dataLayer: {
    value: [],
    writable: true
  },
  requestAnimationFrame: {
    value: callback => setTimeout(callback, 0),
    writable: true
  },
  scrollTo: {
    value: jest.fn(),
    writable: true
  }
});

Object.defineProperty(window.location, "assign", {
  value: jest.fn(),
  writable: true
});
