#include <iostream>

using namespace std;


class Student {

  public:
      int age;
      int rollNumber;



Student(int a, int r)
{
   cout << "called" << endl;

   age = a;
   rollNumber = r;

}

void display()
{

    cout << age << " " << rollNumber << endl;

}

  ~Student()
  {

      cout << "destructor called" << endl;
  }
};

int main()

{

// copy constructor

    Student s1(10, 1001);
    Student s2(20, 2001);
    Student *s3 = new Student(3, 3001);

    s2= s1;


    *s3 = s1;

    s2.display();
    s3->display();
    s1.display();

    delete s3;
    // s3 is dynamic so  we need to delete it manually



/*
    Student s1(12,34);
    s1.display();

    Student s2(s1);
    s2.display();

    Student *s3 = new Student(s2);
    s3->display();

    */





}
