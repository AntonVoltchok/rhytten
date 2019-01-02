import fetch from 'isomorphic-fetch';

const request = async (input) => {
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${input}`);
        const result = await response.json();
        const words = result.map((item)=>{
            return item.word;
        });
        return words;
    }
    catch(e) {
        console.log('ERROR IN FETCH', e)
    }
};

request('word').then(value => console.log('LOGGING', value));