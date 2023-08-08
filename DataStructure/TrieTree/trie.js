// 用一个树建立前缀索引
// 前缀索引常用于字符串的自动补全功能。前缀索引可以通过构建一颗称作"前缀树"或"Trie树"的特殊树来实现。
// 根据前缀字符串查找的过程就是在这棵树上进行深度优先搜索的过程。

class TrieNode {
  constructor() {
    this.end = false
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  // 添加一个字符串到Trie树
  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.end = true
  }

  // 检查一个字符串是否在Trie树中
  search(word) {
    let node = this.root
    for (let char of word) {
      if (node.children[char]) {
        node = node.children[char]
      } else {
        return false
      }
    }
    return node.end
  }

  // 检查是否在Trie树中有以这个前缀开始的字符串
  startsWith(prefix) {
    let node = this.root
    for (let char of prefix) {
      if (node.children[char]) {
        node = node.children[char]
      } else {
        return false
      }
    }
    return true
  }
}

let trie = new Trie()
trie.insert('apple')
console.log(trie.search('apple')) // 返回 true
console.log(trie.search('app')) // 返回 false
console.log(trie.startsWith('app')) // 返回 true
