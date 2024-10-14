"use client";
import { useState } from "react";

const Contact = () => {
  // État pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });

  const [captchaResult, setCaptchaResult] = useState<number | null>(null);
  const [captchaError, setCaptchaError] = useState(false);

  // Fonctions pour gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Générer la question Captcha (8 + 12 dans ce cas)
  const captchaQuestion = "8 + 12 =";
  const correctAnswer = 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.captcha) === correctAnswer) {
      setCaptchaResult(null);
      alert("Formulaire soumis avec succès !");
      // Ici, tu pourrais ajouter la logique pour envoyer le formulaire au backend
    } else {
      setCaptchaError(true);
      alert("Erreur dans la vérification du Captcha.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: "",
    });
    setCaptchaError(false);
  };

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <p className="mb-6">
        Pour des informations générales, vous pouvez nous contacter à l'adresse suivante :
        <a href="mailto:contact@postup.fr" className="text-blue-500 ml-1">contact@postup.fr</a>
      </p>

      <h2 className="text-xl font-bold mb-4">Les rédacteurs :</h2>
      <ul className="space-y-2">
        <li>
          <strong>Madeline ABRY</strong> : 
          <a href="mailto:madeline.abry@postup.fr" className="text-blue-500 ml-1">madeline.abry@postup.fr</a>
        </li>
        <li>
          <strong>Marie BOUDON</strong> : 
          <a href="mailto:m.boudon@postup.fr" className="text-blue-500 ml-1">m.boudon@postup.fr</a>
        </li>
        <li>
          <strong>Pierre-Antoine DESILLES</strong> : 
          <a href="mailto:pierreantoine.desilles@postup.fr" className="text-blue-500 ml-1">pierreantoine.desilles@postup.fr</a>
        </li>
        <li>
          <strong>Laurent JEANNAS</strong> : 
          <a href="mailto:laurent.jeannas@postup.fr" className="text-blue-500 ml-1">laurent.jeannas@postup.fr</a>
        </li>
        <li>
          <strong>Thibaut LASSER</strong> : 
          <a href="mailto:thiblasser@postup.fr" className="text-blue-500 ml-1">thiblasser@postup.fr</a>
        </li>
        <li>
          <strong>Guillaume LAVIGNIE</strong> : 
          <a href="mailto:guillaume.lavignie@postup.fr" className="text-blue-500 ml-1">guillaume.lavignie@postup.fr</a>
        </li>
        <li>
          <strong>Julien MERCIER</strong> : 
          <a href="mailto:julien.mercier@postup.fr" className="text-blue-500 ml-1">julien.mercier@postup.fr</a>
        </li>
        <li>
          <strong>Marie QUETANT</strong> : 
          <a href="mailto:marie.quetant@postup.fr" className="text-blue-500 ml-1">marie.quetant@postup.fr</a>
        </li>
        <li>
          <strong>Lauriane SONGUE</strong> : 
          <a href="mailto:lauriane.songue@postup.fr" className="text-blue-500 ml-1">lauriane.songue@postup.fr</a>
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Formulaire de Contact</h2>
      <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Sujet
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border rounded-md h-32"
          ></textarea>
        </div>

        {/* CAPTCHA Section */}
        <div className="flex items-center">
          <label htmlFor="captcha" className="block text-sm font-medium mr-4">
            Captcha: {captchaQuestion}
          </label>
          <input
            type="text"
            name="captcha"
            id="captcha"
            value={formData.captcha}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-20 border rounded-md"
          />
          {captchaError && <span className="text-red-500 ml-2">Erreur dans le Captcha</span>}
        </div>

        <div className="space-x-4">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
            SOUMETTRE
          </button>
          <button type="reset" className="px-4 py-2 bg-gray-400 text-white rounded-md">
            RÉINITIALISER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
