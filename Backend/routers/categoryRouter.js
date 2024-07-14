import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';

const categoryRouter = express.Router();

// Fetch all categories
categoryRouter.get('/', expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));

// Add a new category
categoryRouter.post('/addcategory', expressAsyncHandler(async (req, res) => {
    const { categoryname } = req.body;

    const category = new Category({
        categoryname,
    });

    const createdCategory = await category.save();
    res.status(201).json({ message: 'Category Created Successfully', category: createdCategory });
}));

// Fetch a specific category by ID
categoryRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
        res.send(category);
    } else {
        res.status(404).send({ message: "Category not found." });
    }
}));

// Update a category by ID
categoryRouter.put('/:id', expressAsyncHandler(async (req, res) => {
    const { categoryname } = req.body;

    const category = await Category.findById(req.params.id);

    if (category) {
        category.categoryname = categoryname;

        const updatedCategory = await category.save();
        res.send({ message: 'Category Updated Successfully', category: updatedCategory });
    } else {
        res.status(404).send({ message: "Category not found." });
    }
}));

// Delete a category by ID
categoryRouter.delete('/:id', expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
        await category.remove();
        res.send({ message: 'Category Deleted Successfully' });
    } else {
        res.status(404).send({ message: "Category not found." });
    }
}));

export default categoryRouter;
