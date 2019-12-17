/**
 * domnode-at-path
 * Copyright (C) 2016 Marcel Klehr <mklehr@gmx.net>
 */
// Paths are arrays, where [] is the root node
const nodeAt = (path, rootNode) => {
  // Returns undefined if the node could not be found
  if(!rootNode) return

  if(path.length == 0) {
    return rootNode
  }

  var firstIndex = path[0]

  // Node#childNodes is a liste of *all* child nodes, including CharacterData
  // Element#children contains elements only.
  var curNode = rootNode.childNodes[firstIndex]

  return nodeAt(path.slice(1), curNode)
}

export default nodeAt
