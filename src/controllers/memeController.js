const axios = require('axios');

const getmeme = async (req, res) => {
    try {
        const {template_id} = req.query;
        const {text0} = req.query;
        const {text1} = req.query;
        const {username} = req.query;
        const {password} = req.query;

        const response = await axios.post(`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {getmeme}