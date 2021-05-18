const AppError = require('../error/AppError');
const uuid = require('uuid');
const path = require('path');


class LibraryController {
    async newPost(req, res) {
        const {title, text} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + "jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const newLit = await newLit.create({
            title, text, img:fileName
        });
        res.jso(newLit);
    }

    async allPost(req, res) {
        const allNews = await allNews.findAll();
        res.json(allNews);
    }

    async onePost(req, res, next) {
        const {id} = req.params; 
        const oneOffical = await Offical.findOne({ 
        wehere: {id} 
        }); 
        res.json(oneOffical.rows[0]); 
    }

    async updatePost(req, res, next) {
        const {title, text, img} = req.body;
        const upPost = await upPost.update({
          title,text, img  
        });
        res.json(upPost);
    }

    async deletePost(req, res, next) {
    const {id} = req.params;
    const delPost = await delPost.delete({
        where:{id}
    });
    res.json(delPOst.rows[0]);
    }




}

module.exports = new LibraryController();