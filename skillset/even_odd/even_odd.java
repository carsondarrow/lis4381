import java.util.Scanner;

public class even_odd {

   

   public static void main(String[] args) {
      int num;
      System.out.println("Program evaluates integers as even or odd.");
      System.out.println("Note: Program does *not* check for non-numeric characters.");
      System.out.print("Enter integer: ");
      Scanner scnr = new Scanner(System.in);
      num = scnr.nextInt();

      if (num % 2 == 0)
      {
         System.out.println(num + " is an even number");
      }
         else
         {
            System.out.println(num + " is an odd number");
         }

   }
}
