
#include<iostream>
using namespace std;


class Student {

   int age;
   public:
    char *name;


   public:

       void display()
       {

           cout << age << " " << name <<endl;
       }


       Student(int age, char *name)
       {
           this -> age = age;
           this -> name = new char[name.length + 1];
           strcpy(this->name, name);

       }

       Student(Student const &s)
       {
          this->age = s1.age;
          this->name = new char[strlen(s.name) + 1];
          strcpy(this-> name, s.name);

       }
};

int main()

{

    char name[] = 'cj';
    Student s1(12,name);
    s1.display();


    Student s2(s1);
    s2.name[0] = 'x';
    s1.display();
    s2.display();

}
