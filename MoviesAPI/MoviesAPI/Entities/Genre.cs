using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Genre : IValidatableObject
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Alue {0} täytyy kirjoittaa")]
        [StringLength(10)]
        //[FirstLetterUppercase]
        public string Name { get; set; }

        [Range(18, 120)]
        public int Age { get; set; }
        [CreditCard]
        public string CreditCard { get; set; }
        [Url]
        public string Url { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(Name))
            {
                var firstLetter = Name[0].ToString();

                if (firstLetter != firstLetter.ToUpper())
                {
                    yield return new ValidationResult("Eka kirjain täytyy olla isolla!", new string[] { nameof(Name) });
                }
            }
        }
    }
}
