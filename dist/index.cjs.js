'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const InputText = () => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const validateName = name => {
    if (!name) {
      return "Name cannot be empty.";
    }
    if (name.length < 3) {
      return "Name must be at least 3 characters long.";
    }
    if (!isNaN(name)) {
      return "Name cannot be a number.";
    }
    return "";
  };
  const handleSubmit = e => {
    e.preventDefault();
    const validationError = validateName(name);
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      console.log("Form submitted with name:", name);
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "name"
  }, "Text", /*#__PURE__*/React__default["default"].createElement("input", {
    id: "name",
    type: "text",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "submit",
    style: {
      backgroundColor: '#4caf50'
    }
  }, "Submit")), error && /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      color: 'red'
    }
  }, error));
};

const InputNumber = () => {
  const [number, setNumber] = React.useState('');
  const [error, setError] = React.useState('');
  const validateNumber = number => {
    if (!number) {
      return "Number cannot be empty.";
    }
    return;
  };
  const handleSubmit = e => {
    e.preventDefault();
    const validationError = validateNumber(number);
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      console.log("Form submitted with a number:", number);
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default["default"].createElement("label", null, "Number", /*#__PURE__*/React__default["default"].createElement("input", {
    id: "number",
    type: "number",
    value: number,
    onChange: e => setNumber(e.target.value)
  })), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "submit"
  }, "Submit")), error && /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      color: 'red'
    }
  }, error));
};

const InputCheckbox = () => {
  const [arr, setArr] = React.useState([]);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [error, setError] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const handleCheckboxChange = event => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== value));
    }
  };
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (arr.length === 0 || selectedItems.length === 0) {
      setError('Please select at least one option.');
    } else {
      setError('');
      alert('Form submitted with selected items: ' + selectedItems.join(', '));
    }
  };
  const handleSetOptions = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please enter at least one option.');
      return;
    }
    const options = inputValue.split(',').map(item => item.trim());
    setArr(options);
    setInputValue('');
    setError('');
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: handleSetOptions
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    value: inputValue,
    onChange: handleInputChange,
    placeholder: "Enter options separated by commas"
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "submit"
  }, "Set Options")), /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: handleSubmit
  }, arr.map(item => /*#__PURE__*/React__default["default"].createElement("div", {
    key: item
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    id: item,
    name: item,
    value: item,
    onChange: handleCheckboxChange
  }), /*#__PURE__*/React__default["default"].createElement("label", null, item))), /*#__PURE__*/React__default["default"].createElement("br", null), error && /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      color: 'red'
    }
  }, error), arr.length > 0 && /*#__PURE__*/React__default["default"].createElement("button", {
    type: "submit"
  }, "Submit")));
};

exports.InputCheckbox = InputCheckbox;
exports.InputNumber = InputNumber;
exports.InputText = InputText;
