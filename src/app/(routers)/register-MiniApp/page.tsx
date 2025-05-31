'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import '@/styles/miniappstyle.css' // Seu CSS customizado, se precisar

export default function RegisterMiniAppPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    iconUrl: '',
    entrypointUrl: '',
    repositoryUrl: '',
    version: '',
    permissions: [] as string[],
    categories: [] as string[]
  })

  const permissionsList = ['notification', 'camera', 'location', 'payments', 'files']
  const categoriesList = ['finance', 'education', 'laser', 'comida', 'outros']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (type: 'permissions' | 'categories', value: string) => {
    setFormData((prev) => {
      const alreadySelected = prev[type].includes(value)
      return {
        ...prev,
        [type]: alreadySelected
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/miniapps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Miniapp cadastrado com sucesso!')
        router.push('/register-MiniApp');
      } else {
        alert('Erro ao cadastrar miniapp.')
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Erro ao conectar com o servidor.')
    }
  }

  return (
    <div className="form-container container mt-5" style={{ maxWidth: '600px' }}>
      <div className="title mb-4 fs-3 fw-bold">MiniAPP - Cadastro</div>
      <form onSubmit={handleSubmit}>
        {/* Categorias */}
        <div className="mb-4">
          <label className="form-label fw-bold">Categorias:</label>
          {categoriesList.map((cat) => (
            <div className="form-check" key={cat}>
              <input
                className="form-check-input"
                type="checkbox"
                id={cat}
                checked={formData.categories.includes(cat)}
                onChange={() => handleCheckboxChange('categories', cat)}
              />
              <label className="form-check-label text-capitalize" htmlFor={cat}>
                {cat}
              </label>
            </div>
          ))}
        </div>

        {/* Permissões */}
        <div className="mb-4">
          <label className="form-label fw-bold">Permissões:</label>
          {permissionsList.map((perm) => (
            <div className="form-check" key={perm}>
              <input
                className="form-check-input"
                type="checkbox"
                id={perm}
                checked={formData.permissions.includes(perm)}
                onChange={() => handleCheckboxChange('permissions', perm)}
              />
              <label className="form-check-label text-capitalize" htmlFor={perm}>
                {perm}
              </label>
            </div>
          ))}
        </div>

        {/* Inputs */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Nome:
          </label>
          <input
            id="name"
            name="name"
            className="form-control"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">
            Descrição:
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows={2}
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="version" className="form-label fw-bold">
            Versão:
          </label>
          <input
            id="version"
            name="version"
            className="form-control"
            type="text"
            required
            value={formData.version}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="entrypointUrl" className="form-label fw-bold">
            Entrypoint URL:
          </label>
          <input
            id="entrypointUrl"
            name="entrypointUrl"
            className="form-control"
            type="url"
            required
            value={formData.entrypointUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="iconUrl" className="form-label fw-bold">
            Icon URL:
          </label>
          <input
            id="iconUrl"
            name="iconUrl"
            className="form-control"
            type="url"
            value={formData.iconUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="repositoryUrl" className="form-label fw-bold">
            Repository URL:
          </label>
          <input
            id="repositoryUrl"
            name="repositoryUrl"
            className="form-control"
            type="url"
            value={formData.repositoryUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          CONTINUAR
        </button>
      </form>
    </div>
  )
}
