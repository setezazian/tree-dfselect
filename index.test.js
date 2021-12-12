const Tree = require('./index');

describe('Test the implementation of Depth First Select', () => {
  it('should filter by value', () => {
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);
    var filter = function (value, depth) {
      return value % 2;
    }
    expect(root1.DFSelect(filter)).toEqual([1, 5, 3, 7]);
  });
  it('should filter by depth', () => {
    var root1 = new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);
    var filter = function (value, depth) {
      return depth === 1;
    }
    expect(root1.DFSelect(filter)).toEqual([2, 3]);
  });
});
