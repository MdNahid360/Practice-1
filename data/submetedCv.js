   var group = ["a","b","c","d"];
            var groupLength = group.length;

            for(var i = 0;i < groupLength;i++){
             var item = group[i];

    // Do something if is the last iteration of the array
             if((i + 1) == (groupLength)){
             console.log("Last iteration with item : " + item);
    }
}
