export class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(',').join(' ');
      this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-updated');
    }
    return this;
  }

  filter() {
    const query = { ...this.queryStr };
    const removeFields = ['sort', 'q', 'fields', 'page', 'limit'];
    removeFields.forEach((el) => delete query[el]);
    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`,
    );

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  searchByQuery() {
    if (this.queryStr.q) {
      const term = this.queryStr.q.split('-').join(' ');
      this.query = this.query.find({ $text: { $search: `"${term}"` } });
    }

    return this;
  }

  limitFields() {
    if (this.queryStr.fields) {
      const fields = this.queryStr.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  pagination() {
    const page = parseInt(this.queryStr.page, 10) || 1;
    const limit = parseInt(this.queryStr.limit, 10) || 5;
    const skipResults = (page - 1) * limit;

    this.query = this.query.skip(skipResults).limit(limit);

    return this;
  }
}
