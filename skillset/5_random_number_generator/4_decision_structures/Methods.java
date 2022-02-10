import java.util.Random;
import java.util.Scanner;

public class Methods {

   public static void getRequirements()
   {
      System.out.println("Developer: Carson Darrow");
      System.out.println("Print minimum and maximum integer values.");
      System.out.println("Program prompts user to enter desired number of pseudorandom-generated integers (min 1).");
      System.out.println("Use following loop structures: for, enhannced for, while, do...while.");

      System.out.println();

      int min, max;
      Scanner sc = new Scanner(System.in);

      System.out.print("Integer.MIN_VALUE: ");
      min = sc.nextInt();
      System.out.print("Integer.MAX_VLUE: ");
      max = sc.nextInt();
      System.out.println();
   }
   

   public static int[] createArray()
    {
      
      int arraySize;
      Scanner sc = new Scanner(System.in);

      System.out.println("Entered desired number of pseudorandom-generated integers (min 1): 5");
      System.out.println("For loop:");
      arraySize = sc.nextInt();

      int yourArray[] = new int[arraySize];
      return yourArray;

    }

   public static void generatedpseudorandomintegers(int[] myArray) 
   {
   Random r = new Random();


   int i = 0;
   System.out.println("for loop");
   for(i=0; i< myArray.length; i++);
   {
   System.out.println(r.nextInt());
   }

   System.out.println("\nEnhanced for loop:");
   for (int n: myArray)
   {
      System.out.println(r.nextInt());
   }

   System.out.println("\nwhile loop:");
   i=0;
   while (i< myArray.length)
   {
      System.out.println(r.nextInt());
      i++;
   }

   i=0;
   System.out.println("\ndo...while loop:");
   do
   {
      System.out.println(r.nextInt());
      i++;
   }
   while (i < myArray.length);

   }
}