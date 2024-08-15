let name = "example";
let item = {
    mark: {
        group: {
            mark: {
                group: null // End of the chain
            }
        }
    }
};

if (name) {
    for (i = item; i; i = i.mark.group) {
        console.log(i); // This will log each nested group until it reaches the end of the chain.
    }
}
