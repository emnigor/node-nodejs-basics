const parseArgs = () => {
    process.argv.forEach((val, index) => {
        if(index>1 && val.slice(0, 2)==='--') {
            console.log(`${val} is ${process.argv[index+1]}`);
        }
      });
};

parseArgs();