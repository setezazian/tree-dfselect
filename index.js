/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
    this.value = value;
    this.children = [];
  };

  Tree.prototype.DFSelect = function(filter) {
    let result = [];

    Tree.prototype.DFSelectRecursive = function(filter, depth) {
      if (filter(this.value, depth)) {
        result.push(this.value);
      };
      this.children.forEach(child => {
        child.DFSelectRecursive(filter, depth + 1);
      });
    };

    this.DFSelectRecursive(filter, 0);
    return result;
  };



  /**
   * You shouldn't need to change anything below here, but feel free to look.
    */

  /**
    * add an immediate child
    * (wrap values in Tree nodes if they're not already)
    */
  Tree.prototype.addChild = function(child) {
    if (!child || !(child instanceof Tree)) {
      child = new Tree(child);
    }

    if (!this.isDescendant(child)) {
      this.children.push(child);
    } else {
      throw new Error('That child is already a child of this tree');
    }
    // return the new child node for convenience
    return child;
  };

  /**
    * check to see if the provided tree is already a child of this
    * tree __or any of its sub trees__
    */
  Tree.prototype.isDescendant = function(child) {
    if (this.children.indexOf(child) !== -1) {
      // `child` is an immediate child of this tree
      return true;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].isDescendant(child)) {
          // `child` is descendant of this tree
          return true;
        }
      }
      return false;
    }
  };

  /**
    * remove an immediate child
    */
  Tree.prototype.removeChild = function(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      // remove the child
      this.children.splice(index, 1);
    } else {
      throw new Error('That node is not an immediate child of this tree');
    }
  };


module.exports = Tree;
