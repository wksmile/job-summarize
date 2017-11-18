// -------------------
function hasSubtree(pRoot1, pRoot2) {
    var result = false;
    if(pRoot1 != null && pRoot2 != null) {
        if(pRoot1.val == pRoot2.val){
            result = doesTree1HaveTree2(pRoot1,pRoot2);
        }
        if(!result){
            result = hasSubtree(pRoot1.left,pRoot2);
        }
        if(!result){
            result = hasSubtree(pRoot1.right,pRoot2);
        }
    }
    return result;
}

function doesTree1HaveTree2(pRoot1, pRoot2) {
    if(pRoot2 == null){
        return true;
    }
    if(pRoot1 == null){
        return false;
    }
    if(pRoot1.val != pRoot2.val){
        return false;
    }
    return doesTree1HaveTree2(pRoot1.left,pRoot2.left) && doesTree1HaveTree2(pRoot1.right,pRoot2.right);
}
