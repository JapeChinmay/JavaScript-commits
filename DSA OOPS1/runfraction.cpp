#include <iostream>

using namespace std;


class Addup{


   private:
       int age;
       bool lic;


   public :


    Addup(int age, bool lic)
    {
        if(age >= 18 && lic == true)
        {



        this->lic = lic;
        this->age = age;

        }

    }

    void print()
    {
        cout << this->age << " " << this->lic << endl;

    }
};


int main()

{

    Addup a1(20, true);
    a1.print();

}
