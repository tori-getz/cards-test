import React, { useState } from "react";
import { MdAdd, MdCreate } from "react-icons/md";
import { Button } from "~/shared/ui/button";
import { Input } from "~/shared/ui/input";
import { Modal } from "~/shared/ui/modal";
import { SubmitHandler, useForm } from 'react-hook-form';
import cls from './add-card.module.sass';
import { ValidationSchema, ValidationType } from "./validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardSize, addCard } from "~/entities/card";

export const AddCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, },
  } = useForm<ValidationType>({
    resolver: zodResolver(ValidationSchema),
  });

  const onSubmit: SubmitHandler<ValidationType> = ({ size, ...form }) => {
    addCard({
      size: Number(size) as CardSize,
      ...form
    });
    setModalOpen(false);
  };

  return (
    <div>
      <Button
        left={<MdAdd />}
        onClick={() => setModalOpen(true)}
      >
        Добавить карточку
      </Button> 
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Создание карточки"
        className={cls.modal}
      >
        <Input
          placeholder="Название"
          {...register('title')}
        />
        {errors.title && (
          <p>{errors.title.message}</p>
        )}
        <Input
          placeholder="Описание"
          {...register('description')}
        />
        {errors.description && (
          <p>{errors.description.message}</p>
        )}
        <Input
          placeholder="Размер (от 3 до 12)"
          type="number"
          {...register('size')}
        />
        {errors.size && (
          <p>{errors.size.message}</p>
        )}
        <Button
          left={<MdCreate />}
          onClick={handleSubmit(onSubmit)}
        >
          Создать
        </Button>
      </Modal>
    </div>
  );
};
