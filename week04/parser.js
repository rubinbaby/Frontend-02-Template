// 18-01
let currentToken = null;
let currentAttribute = null;

let stack = [{type: "document", children:[]}];

function emit(token){
    // if(token.type === "text"){
    //     return;
    // }
    let top = stack[stack.length - 1];

    if(token.type === "startTag"){
        let element = {
            type: "element",
            children: [],
            attributes: []
        };

        element.tagName = token.tagName;

        for(let p in token){
            if(p !== "type" && p !== "tagName"){
                element.attributes.push({
                    name: p,
                    value: token[p]
                });
            }
        }

        top.children.push(element);
        element.parent = top;

        if(!token.isSelfClosing){
            stack.push(element);
        }

        currentTextNode = null;
    }else if(token.type === "endTag"){
        if(top.tagName !== token.tagName){
            throw new Error("Tag start end doesn't match!");
        }else{
            stack.pop();
        }
        currentTextNode = null;
        // console.log(token);
    }else if(token.type === "text"){
        if(currentTextNode === null){
            currentTextNode = {
                type: "text",
                content: ""
            }
            top.children.push(currentTextNode);
        }
        currentTextNode.content += token.content;
    }
    // console.log(token);
}

// 16-01
const EOF = Symbol("EOF"); //EOF: End Of File

// 16-01
function data(c){
    // 17-01
    if(c === "<"){
        return tagOpen;
    }else if(c === EOF){
        // 18-01
        emit({
            type: "EOF"
        })
        return ;
    }else{
        // 18-01
        emit({
            type: "text",
            content: c
        })
        return data;
    }
}

// 17-01
function tagOpen(c){
    if(c === "/"){
        return endTagOpen;
    }else if(c.match(/^[a-zA-Z]$/)){
        // 18-01
        currentToken = {
            type: "startTag",
            tagName: ""
        }
        return tagName(c);
    }else{
        return ;
    }
}

// 17-01
function endTagOpen(c){
    if(c.match(/^[a-zA-Z]$/)){
        // 18-01
        currentToken = {
            type: "endTag",
            tagName: ""
        }
        return tagName(c);
    }else if(c === ">"){

    }else if(c === EOF){

    }else{

    }
}

// 17-01
function tagName(c){
    if(c.match(/^[\t\n\f ]$/)){
        return beforeAttributeName;
    }else if(c === "/"){
        return selfClosingStartTag;
    }else if(c.match(/^[a-zA-Z]$/)){
        // 18-01
        currentToken.tagName += c;
        return tagName;
    }else if(c === ">"){
        // 18-01
        emit(currentToken);
        return data;
    }else{
        return tagName;
    }
}

// 17-01
function beforeAttributeName(c){
    if(c.match(/^[\t\n\f ]$/)){
        return beforeAttributeName;
    }else if(c === "/" || c === ">" || c === EOF){ // 19-01
        return afterAttributeName(c);
    }else if(c === "="){
        return beforeAttributeName;
    }else{
        // 19-01
        currentAttribute = {
            name: "",
            value: ""
        }
        return attributeName(c);
    }
}

// 19-01
function attributeName(c){
    if(c.match(/^[\t\n\f ]$/) || c === "/" || c === ">" || c === EOF){
        return afterAttributeName(c);
    }else if(c === "="){
        return beforeAttributeValue;
    }else if(c === "\u0000"){

    }else if(c === "\"" || c === "'" || c === "<"){

    }else{
        currentAttribute.name += c;
        return attributeName;
    }
}

// 19-01
function beforeAttributeValue(c){
    if(c.match(/^[\t\n\f ]$/) || c === "/" || c === ">" || c === EOF){
        return beforeAttributeValue;
    }else if(c === "\""){
        return doubleQuotedAttributeValue;
    }else if(c === "\'"){
        return singleQuotedAttributeValue;
    }else if(c === ">"){
        
    }else{
        return UnquotedAttributeValue(c);
    }
}

// 19-01
function doubleQuotedAttributeValue(c){
    if(c === "\""){
        currentToken[currentAttribute.name] = currentAttribute.value;
        return afterQuotedAttributeValue;
    }else if(c === "\u0000"){

    }else if (c === EOF){

    }else{
        currentAttribute.value += c;
        return doubleQuotedAttributeValue;
    }
}

// 19-01
function singleQuotedAttributeValue(c){
    if(c === "\'"){
        currentToken[currentAttribute.name] = currentAttribute;
        return afterQuotedAttributeValue;
    }else if(c === "\u0000"){

    }else if (c === EOF){

    }else{
        currentAttribute.value += c;
        return singleQuotedAttributeValue;
    }
}

// 19-01
function afterQuotedAttributeValue(c){
    if(c.match(/^[\t\n\f ]$/)){
        return beforeAttributeName;
    }else if(c === "/"){
        return selfClosingStartTag;
    }else if(c === ">"){
        currentToken[currentAttribute.name] = currentAttribute.value;
        emit(currentToken);
        return data;
    }else if(c === EOF){

    }else{
        currentAttribute.value += c;
        if(c === "\""){
            return doubleQuotedAttributeValue;
        }else if(c === "\'"){
            return singleQuotedAttributeValue;
        }
    }
}

// 19-01
function UnquotedAttributeValue(c){
    if(c.match(/^[\t\n\f ]$/)){
        currentToken[currentAttribute.name] = currentAttribute.value;
        return beforeAttributeName;
    }else if(c === "/"){
        currentToken[currentAttribute.name] = currentAttribute.value;
        return selfClosingStartTag;
    }else if(c === ">"){
        currentToken[currentAttribute.name] = currentAttribute.value;
        emit(currentToken);
        return data;
    }else if(c === "\u0000"){

    }else if(c === "\"" || c === "'" || c === "<" || c === "=" || c === "`"){

    }else if(c === EOF){

    }else{
        currentAttribute.value += c;
        return UnquotedAttributeValue;
    }
}

// 19-01
function afterAttributeName(c){
    if(c.match(/^[\t\n\f ]$/)){
        return afterAttributeName;
    }else if(c === "/"){
        return selfClosingStartTag;
    }else if(c === "="){
        return beforeAttributeValue;
    }else if(c === ">"){
        currentToken[currentAttribute.name] = currentAttribute.value;
        emit(currentToken);
        return data;
    }else if(c === EOF){

    }else{
        currentToken[currentAttribute.name] = currentAttribute.value;
        currentAttribute = {
            name: "",
            value: ""
        };
        return attributeName(c);
    }
}

// 17-01
function selfClosingStartTag(c){
    if(c === ">"){
        // 18-01
        currentToken.isSelfClosing = true;
        return data;
    }else if(c === "EOF"){

    }else{
        
    }
}

module.exports.parseHTML = function parseHTML(html) {
    // console.log(html);
    // 16-01
    let state = data;
    for(let c of html){
        state = state(c);
    }
    state = state(EOF);
    return stack[0];
}