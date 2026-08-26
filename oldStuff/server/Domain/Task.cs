namespace Main.Domain;

// Note: Id is here just to satisfy need for being able to reference them
// Relationship in domains is just a simple parent composes children
// In the db, inversion of relationship (child holds id of parent) is used, to avoid lists in parent

public class UserCredential(Guid id, String name, Byte[] password) {
    public Guid Id => id;
    public String Name => name;
    public Byte[] Password => password;
}

public class UserDetails(Guid id, String name, String profilePicturePath) {
    public Guid Id => id;
    public String Name => name;
    public String ProfilePicturePath => profilePicturePath;
}

public class Task(Guid id, String title, String description, ICollection<CheckList> tasks) {
    public Guid Id => id;
    public String Title => title;
    public String Description => description;
    public ICollection<CheckList> Tasks => tasks;
}

public class CheckList(Guid id, ICollection<CheckListItem> items) {
    public Guid Id => id;
    public ICollection<CheckListItem> Items => items;
}

public class CheckListItem(Guid id, bool completed, String description) {
    public Guid Id => id;
    public bool Completed => completed;
    public String Description => description;
}

public class Comment(Guid id, UserDetails userDetails, String content, ICollection<Comment> comments) {
    public Guid Id => id;
    public UserDetails UserInfo => userDetails;
    public String Content => content;
    public ICollection<Comment> Comments => comments;
}
