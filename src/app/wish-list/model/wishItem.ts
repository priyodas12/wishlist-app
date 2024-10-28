export default class WishItem {
  constructor(
    public wishId: Number,
    public wishDesc: String,
    public isCompleted: boolean,
    public completeDate: Date,
    public startDate: Date,
  ) {}
}
