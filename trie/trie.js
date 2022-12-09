function TrieNode(){
    this.children = {};
    this.endOfString = false;
}

function Trie(){
    this.root = new TrieNode();
}