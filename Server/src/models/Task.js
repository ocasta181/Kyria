//src/models/Task.js
import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

class Task {

  initSchema() {
    const schema = new Schema({
      title: {
        type: String,
        required: true,
      },
      slug: String,
      description: {
        type: String,
        required: false,
      },
      status: {
        type: Number,
        required: true,
      },
      isComplete: {
        type: Boolean,
        required: true,
      }
    }, { timestamps: true });
    schema.pre(
      "save",
      function(next) {
        let task = this;
        if (!task.isModified("title")) {
          return next();
        }
        task.slug = slugify(task.title, "_");
        console.log('set slug', task.slug);
        return next();
      },
      function(err) {
        next(err);
      }
    );
    schema.plugin(uniqueValidator);
    mongoose.model("tasks", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("tasks");
  }
}

export default Task;