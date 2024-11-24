import React, { useState, useEffect } from "react"; // Correctly imported hooks
import "../css/JoinCommunity.css";

const JoinCommunity = () => {
  const [gradientPosition, setGradientPosition] = useState({
    x: "50%",
    y: "50%",
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = 100 - ((clientX - left) / width) * 100;
    const y = 100 - ((clientY - top) / height) * 100;
    setGradientPosition({ x: `${x}%`, y: `${y}%` });
  };
  const coachTypes = [
    {
      id: 1,
      title: "Fitness Trainer",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/3825/b415/1b655ce49aba23e11c3acb69a4b792c9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UbKDUB~GLEMaXgPUq3b507jnUTiR5XLuis-YC6AUK7WTMOFcNgL-ChWPmcwNUMZ8lS2P7BvwVUsC2CAwQyZfR8tCr9lHyK42Q-zfrhQaYM4m3S3v15~N9xhHGn5jEMYDuzWLE4EJ1kw~pBwOd2oRP~2KMXqEUXab-uIvUFIc44HgY-JlZNbP8BLgmXWYLJyiI20UXnDyrVbzqMwmAtvbaE8u77H6~pEl-NaFsGIFitV1eGWeOCqGdCI6E9Km~JAbqDoDLV0TzD~ZlsrdtW~QiYPTPwA-hd8xa6RmHKUg8IHLMEDeuB3YvtkLegCUat-Vg~hQeR9p5t5VTof9Vx4sZw__",
    },
    {
      id: 2,
      title: "Meditation Trainer",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/d9eb/1ba1/03151d42b5637711574195738b755feb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o5Gy4XcguEFJGv~WL9mYxAGD~hzeRiEF~PCQAtCCbqBn4xHvvRO6aimI4xY4LLGwDb~EjNhvdxAqLKypzagbhU7P0K4E81JgyZ9CpFce403H9wayOo-gOFpBWnXWabBQczeFv57szIjEW5i3OSJlZlqslXhP8kj32qBm2SzKvh9HKKCaakB-b2yKuRHjAJz22wDCeqnkivGry3CKJ-spNl70zmY2Vj-iFxqpsn6AC-0fOqDX1XInO6LIp4pSMonqjRVaTRkmrzYk~x3akktBp2nIuQV8BOhyaL6hyC0jcETnq6sxrmn-geZ4Ln2wT2DR50Ky6AA5-7dVtoFwCNcHAA__",
    },
    {
      id: 3,
      title: "Yoga Trainer",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/569f/71ae/416016e855f6ed895db3040cf669eeb6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dn4sRisXcuAvP8SQYNIP45n8ElCVNXFJBmZFy33bKk~GaJjjpUwZOgJNpcGDWQi3KSSSlNSUkQsB9038bZRKufconcHGSgL2ZdNbY4~Kd6-V4-Cm1iEonLfNMT8qyhcJkUcF02dWJHRZrDPX7k~ZUJ1DeZ~dfVZ2PZMzGDIH~aouJIRsR4jTmW0XhaGasW6XyFcohItbTmI5YCyI7vl5UzFBy35LK2JFavpThQWan~VQyB8uuHV5Tr6QwNC8HEJF7P0hCTAQJiQxCLi3rfKx2HAAj671WzccdHPTxWIH-dQU5MsIgOpzb~Fj5wg2A6itdJiTsQJIqnXV~PIE9rQ~qg__",
    },
    {
      id: 4,
      title: "Physiotherapy Trainer",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/e136/14d8/e9fb064dd21a24162f41622dc5888ce7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fxEqSSQQut-o-hAk2JpkHkVus6v53TrqiHslEIMzkvtTqHL4yOMboZcKvvWZRmQyf9dae4QJZjf-l4VG8104sBlMx06JZCpYq4jaA0p6VgIbLv~L508J0O98CydJq9juGAReplY1GdXhqh3alz4IUqyCCmTGScKAxwWFn~E8iUeH9ENP89rR75EImV-NDnAvJ13UXXPymSZrSmlED~KPMktNC5VZyI6Tkn540DHMNdK8e5ByKO6~qtPUYivHNdECfCD3fL2LqLswgsTbvl9Bpr2px1wfTf8greOdgrlsAapBLxE1RwnhKiW-6-vly4C57icxp4lpFqSP8017oRL71w__",
    },
    {
      id: 5,
      title: "Rehab & Recovery Experts",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/cba2/1073/d0a18bf6508ff4879280689f9b1e40af?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmvO~3IBYMJGqpGFUEtFMpRA-upkv6ijgWtq-7AfvUgw56ZsM2oLpM3GXz~6qSm6Cq613u4cgrVMG9Ct9f6HROKFwuQpQHCZEXJ14qkLfR06d-5ET82TS8OqEI-Ao4RPcMjWY6P9GtEJTsrWc1kClXnfZFTcoSHUJ09Gl51v8Sryk~iruED5P1vtXe-bItzbHGsfcU9LFKYStnmpqC2~zZJYA6Urd4uc64CNnnr99XoZTS3enX6iS20IRRFnDExZhRBUzEDB5~ldXTQkHFSSXPIrtUrQiDxJhghCaI0peSm5OYukACEn2G2CZr1MJfptCQzpAab8y~3Zz6ayBAL09w__",
    },
    {
      id: 6,
      title: "Doctors",
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/cba2/1073/d0a18bf6508ff4879280689f9b1e40af?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmvO~3IBYMJGqpGFUEtFMpRA-upkv6ijgWtq-7AfvUgw56ZsM2oLpM3GXz~6qSm6Cq613u4cgrVMG9Ct9f6HROKFwuQpQHCZEXJ14qkLfR06d-5ET82TS8OqEI-Ao4RPcMjWY6P9GtEJTsrWc1kClXnfZFTcoSHUJ09Gl51v8Sryk~iruED5P1vtXe-bItzbHGsfcU9LFKYStnmpqC2~zZJYA6Urd4uc64CNnnr99XoZTS3enX6iS20IRRFnDExZhRBUzEDB5~ldXTQkHFSSXPIrtUrQiDxJhghCaI0peSm5OYukACEn2G2CZr1MJfptCQzpAab8y~3Zz6ayBAL09w__",
    },
  ];

  return (
    <section className="community">
      <div className="community__content">
        <h2 className="community__title">Join growing community of Coaches</h2>
        <p
          className="community__subtitle dynamic-gradient"
          style={{
            backgroundPosition: `${gradientPosition.x} ${gradientPosition.y}`,
          }}
          onMouseMove={handleMouseMove}
        >
          FitnEarnPal is your getaway to connect with a global community of
          health and fitness enthusiasts, share experiences and valuable
          knowledge, and grow your audience. As a coach, you have the power to
          inspire, educate, and motivate users worldwide by creating and sharing
          impactful content, workout videos, conducting live sessions, and much
          more.
        </p>
        <button className="community__cta-btn">Join Now</button>
      </div>
      <div className="community__grid">
        {coachTypes.map((coach) => (
          <div className="community__card" key={coach.id}>
            <img
              src={coach.imgSrc}
              alt={coach.title}
              className="community__card-img"
            />
            <p className="community__card-title">{coach.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinCommunity;
